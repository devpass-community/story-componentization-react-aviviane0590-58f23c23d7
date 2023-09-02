export default function Empty({placeholderImg}){

    return(
        <>
            <img
              src={placeholderImg}
              className="mx-auto d-block mt-4 w-50"
              alt=""
            />
        </>
    )
}