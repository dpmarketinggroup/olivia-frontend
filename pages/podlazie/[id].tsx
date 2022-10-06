import {useRouter} from "next/router";

const FloorDetail = () => {
    const router = useRouter()
    console.log(router.query)

    return (
        <div className={'mt-[300px]'}>
            kokot
        </div>
    );
};

export default FloorDetail;
