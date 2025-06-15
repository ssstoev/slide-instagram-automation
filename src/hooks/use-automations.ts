import { 
  createAutomations, 
  deleteAutomations, 
  deleteKeyword, 
  saveKeyword, 
  saveListener, 
  savePosts, 
  saveTrigger, 
  updateAutomationName } from "@/actions/automations"
import { useMutationData } from "./use-mutation-data"
import { useEffect, useRef, useState } from "react";
import { z } from 'zod'
import useZodForm from "./use-zod-form";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { TRIGGER } from "@/redux/slices/automations";
import { useQueryClient } from '@tanstack/react-query'
import { revalidatePath } from "next/cache";
import { useParams } from 'next/navigation';

// useMutationData hook lets us use optimistic UI
export const useCreateAutomation = (mutationId?: string) => {
  // const queryClient = useQueryClient()

  const { isPending, mutate } = useMutationData(
    ['create-automation'], 
    () => createAutomations(mutationId),
    'user-automations',
    // () => queryClient.invalidateQueries({ queryKey: ['user-automations'] })
  )

  return { isPending, mutate }
};

//hook to delete automations
export const useDeleteAutomation = (id?: string) => {
  const { isPending, mutate } = useMutationData(
    ['delete-automation'],
    () => deleteAutomations(id),
    'user-automations'
  )

  return { isPending, mutate }
};

// hook to handle the edit of the automation name in the breadcrumb
export const useEditAutomation = (automationId: string) => {
  const queryClient = useQueryClient()
  const [edit, setEdit] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const enableEdit = () => setEdit(true)
  const disableEdit = () => setEdit(false)
  // const { slug } = useParams(); // slug will be a string or array depending on your route
  // console.log('SLUG IS: ', slug)
  const { isPending, mutate } = useMutationData(
    ['update-automation'],  //name of the mutation we're going to create
    (data: { name: string }) => updateAutomationName(automationId, { name: data.name }), //mutation function 
    'automation-info', //name of query which we will invalidate
    async () => {
      disableEdit(); //this is the onSuccess
      await queryClient.invalidateQueries({ queryKey: ['user-automations'] });
      // console.log('successfully invalidated user-automations query!')
      await queryClient.invalidateQueries({ queryKey: ['automation-info'] }); // optional: also refresh automation-info
    
      // 🚀 Refetch automations list *now*, not later
      console.log('refetching user-automations query....')
      await queryClient.refetchQueries({ queryKey: ['user-automations'] })
      console.log('Refetched successfully user-automations query....')
      // revalidatePath(`/dashboard/${slug}/automations`)
      }
  )

  // the use effect executes mutation on the data if we mouse click outside the input box
  useEffect(() => {
    function handleClickOutside(this: Document, event: MouseEvent | TouchEvent){
      // Check if the input element is mounted and accessible in the DOM 
      // and check did you click/touch outside of the input field
      // inputRef is the input field and we check if we clicked outside of it
      if (inputRef.current && !inputRef.current.contains(event.target as Node | null)){
        if (inputRef.current.value !== ""){
          mutate({ name: inputRef.current.value })
        }
        // if we leave the editing input field empty ==> editing is canceled
        else {
          disableEdit()
        }
      }
    };

    // make it possible to save the new name by pressing Enter
    function handleEnterKey(event: KeyboardEvent) {
      if (event.key === 'Enter' && inputRef.current) {
        if (inputRef.current.value !== '') {
          mutate({ name: inputRef.current.value })
        }
        else {
          disableEdit()
        }
      }
    };

    return () => {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleEnterKey)

    }
  }, []);

  return {
    edit,
    enableEdit,
    disableEdit,
    inputRef,
    isPending
  }
}

export const useListener = (id: string) => {
  const [listener, setListener] = useState<'MESSAGE' | 'SMARTAI' | null>(null)

  const promptSchema = z.object({
    prompt: z.string().min(1),
    reply: z.string()
  })

  const { isPending, mutate } = useMutationData(
    ['create-listener'], 
    (data: { prompt: string; reply: string}) => 
      saveListener(id, listener || 'MESSAGE', data.prompt, data.reply),
      'automation-info'
    )

    const {
      register,
      errors,
      onFormSubmit,
      watch,
      reset
    } = useZodForm(promptSchema, mutate)

    // helper function
    const onSetListener = (type: 'SMARTAI' | 'MESSAGE') => setListener(type)
    return { onSetListener, register, onFormSubmit, listener, isPending }
}

// Hook used to get current trigger types from redux;
// update them via redux
// saves them via an API call using react query
export const useTriggers = (id: string) => {
  // types is the current selected trigger types (from redux)
  const types = useAppSelector((state) => state.AutomationReducer.trigger?.types)

  const dispatch: AppDispatch = useDispatch()

  // update the selected types in Redux (local state mgmt)
  const onSetTrigger = (type: 'COMMENT' | 'DM') => 
    dispatch(TRIGGER({ trigger: { type } }))

  //  save the current type(s) to backend & show if mutation is running
  const { isPending, mutate } = useMutationData(
      ['add-trigger'], 
      (data: { types: string[] }) => saveTrigger(id, data.types),
      'automation-info'
    )

  const onSaveTrigger = () => mutate({ types })

  return { types, onSetTrigger, onSaveTrigger, isPending }
}

// Hook to add/remove keywords
export const useKeywords = (id: string) => {
  const [keyword, setKeyword] = useState('')
  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => 
    setKeyword(event.target.value)

  const { mutate } = useMutationData(
    ['add-keyword'],
    (data: { keyword: string }) =>  saveKeyword(id, data.keyword),
    'automation-info',
    () => setKeyword('')
  )
  
  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      mutate({ keyword })
      setKeyword('')
    }
  }

  const { mutate: deleteMutation } = useMutationData(
    ['delete-keyword'],
    (data: { id: string }) =>  deleteKeyword(data.id),
    'automation-info',
    () => setKeyword('')
  )

  return { keyword, onValueChange, onKeyPress, deleteMutation }

}

// this hook handles the selection of posts
export const useAutomationPosts = (id: string) => {
  const [posts, setPosts] = useState<{
    postid: string,
    caption?: string,
    media: string
    mediaType: 'IMAGE' | 'VIDEO' | 'CAROSEL_ALBUM'
  }[]>([])

  const onSelectPosts = (post: {
    postid: string,
    caption?: string,
    media: string
    mediaType: 'IMAGE' | 'VIDEO' | 'CAROSEL_ALBUM'
  }) => {
    // helper function to select posts
    setPosts((previousItems) => {
      if (previousItems.find((p) => p.postid === post.postid)){
        return previousItems.filter((item) => item.postid !== post.postid)
      }
      else {
        return [...previousItems, post]
      }
    })
  }

  const { mutate, isPending } = useMutationData(
    ['attach-posts'],
    () => savePosts(id, posts),
    'automation-info',
    () => setPosts([])
  )
  return { posts, onSelectPosts, mutate, isPending }
}