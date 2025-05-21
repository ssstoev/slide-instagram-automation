import axios from "axios"
import { useState } from "react"

// export const useSubscription = () => {
//   const [isProcessing, setIsProcessing] = useState(false)

//   const onSubscribe = async () => {
//     setIsProcessing(true)
//     try {
//       const response = await axios.get('/api/payments')
//       if (response.data.status === 200) {
//         setIsProcessing(false)
//         return (window.location.href = `${response.data.session_url}`)
//       }
//       return { status: 404, data: 'Payment failed'}
//     } catch (error) {
//       setIsProcessing(false)
//       return { status: 500, data: 'Oops!Something went wrong!' }
//     }
//   }
//   return { onSubscribe, isProcessing }
// }

// WIP: modify to catch errors
export const useSubscription = () => {
  const [isProcessing, setIsProcessing] = useState(false)

  // helper function to call our payment endpoint
  const onSubscribe = async () => {
    setIsProcessing(true)
    const response = await axios.get('/api/payments')
    if (response.data.status === 200) {
      return (window.location.href = `${response.data.session_url}`)
    }

    setIsProcessing(false)
  }

  return { onSubscribe, isProcessing }
}