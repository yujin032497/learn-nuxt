export const state = () => ({
    cartItems: [],
})

// mutation을 통해 cartItems에 상품을 담는다.
export const mutations = {
    addCartItem(state, cartItem) {
        // 새로운 이미지 갱신
        const newCartItem =  {
        ...cartItem,
        imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
      }
        state.cartItems.push(newCartItem) // cartItems가 배열이기 때문에 push
    }
}