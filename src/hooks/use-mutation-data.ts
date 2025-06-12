import { MutationFunction, MutationKey, useMutation, useMutationState, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

// we set the stage for the optimistic UI here
export const useMutationData = (
  mutationKey: MutationKey,
  mutationFn: MutationFunction<any, any>,
  queryKey?: string,
  onSuccess?: () => void
) => {
  const client = useQueryClient()
  // console.log('useQueryClient: ', client)
  const { mutate, isPending } = useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (data) => {            // only if user passes onSuccess as parameter it is executed
      if (onSuccess) onSuccess()
        // console.log('onSuccess')
      return toast(data.status === 200 ? "Success" : "Error", {
    description: data.data
  })
    },

    // After the mutation completes, invalidateQueries("user-automations" or whatever key you pass in) 
    // marks the existing automation list as stale, causing it to refetch.
    onSettled: async () => {
      console.log('onSettled')
      return await client.invalidateQueries({queryKey: [queryKey]})
    }
  })

  return { mutate, isPending }
}

// this function aims to display the status of the mutation (pending/finished/failed, etc.)
export const useMutationDataState = (mutationKey: MutationKey) => {
  const data = useMutationState({
    filters: { mutationKey },
    select: (mutation) => {
      return {
        variables: mutation.state.variables as any,
        status: mutation.state.status
      }
    }
  })
  
  // console.log(`mutation data state of key ${mutationKey}:`, data)
  // const latestVariable = data[data.length - 1]
    // const latestVariable = data

  return { data }
}