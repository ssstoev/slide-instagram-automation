import { getAllAutomations, getAutomationInfo } from "@/actions/automations"
import { onUserInfo } from "@/actions/user"
import { Query, QueryClient, QueryFunction } from "@tanstack/react-query"
 
// client.prefetchQUery loads data into cache before the component actually needs it
// typically during ssr or pre-navigation phase
// we access the prefetched data via the query key (user-profile, user-automations, automation-info...)
 const prefetch = async (
    client: QueryClient,
    action: QueryFunction,
    key: string
  ) => {
    return await client.prefetchQuery({
      queryKey: [key],
      queryFn: action,
      staleTime: 60000
    })
  }
 
 export const PrefetchUserProfile = async (client: QueryClient) => {
  return await prefetch(client, onUserInfo, 'user-profile')
 }

 export const PrefetchUserAutomations = async (client: QueryClient) => {
  return await prefetch(client, getAllAutomations, 'user-automations')
 }

 export const PrefetchUserAutomation = async (client: QueryClient, automationId: string) => {
  return await prefetch(client, () => getAutomationInfo(automationId), 'automation-info')
 }