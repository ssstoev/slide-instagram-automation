import { getAllAutomations, getAutomationInfo, getProfilePosts } from "@/actions/automations"
import { onUserInfo } from "@/actions/user"
import { useQuery } from "@tanstack/react-query"

export const useQueryAutomations = () => {

  return useQuery(
    {
      queryKey: ["user-automations"],  // Unique key for caching
      queryFn: getAllAutomations,
      initialData: {
        status: 200, 
        data: []
      } 
    }
  )
}

export const useQueryAutomation = (id: string) => {
  return useQuery(
    {
      queryKey: ['automation-info'],
      queryFn: () => getAutomationInfo(id)
    }
  )
}

export const useQueryUser = () => {
  return useQuery({
    queryKey: ['user-profile'],
    queryFn: onUserInfo
  })
}

export const useQueryAutomationPosts = () => {
  const fetchPosts = async () => await getProfilePosts()

  return useQuery({
    queryKey: ['instagram-media'],
    queryFn: fetchPosts
  })
}
