export const images = ["https://picsum.photos/seed/picsum/1184/565"]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
