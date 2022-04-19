import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
  const router = useRouter()
  const {
    query: { idProduct },
  } = router
  return <div>ProductItem {idProduct}</div>
}

export default ProductItem
