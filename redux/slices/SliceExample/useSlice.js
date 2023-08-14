'use client'
import { useSelector } from 'react-redux'
import { getSlice, getSlicePosts, getSliceError, getSliceErrorMessage, getSliceLoading } from './Slice'

export const useSlice = () => {
   const slice = useSelector(getSlice)
   const posts = useSelector(getSlicePosts)
   const loading = useSelector(getSliceLoading)
   const error = useSelector(getSliceError)
   const errorMessage = useSelector(getSliceErrorMessage)

   return { slice, posts, loading, error, errorMessage }
}

// 'use client'
// import { useSlice } from '../../redux/slices/useSlice'
// const { category, loading, errorValues, message } = useSlice()
