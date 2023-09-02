export default function DogItem({imgSrc, selectedBreed, index, dogImages}){

    return(
        <>
        <img
            key={`${index}-${selectedBreed}`}
            src={imgSrc}
            className="img-thumbnail w-25"
            alt={`${selectedBreed} ${index + 1} of ${dogImages.length}`}
            />
        </>
    )
}