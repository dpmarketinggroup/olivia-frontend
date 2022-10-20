import React from 'react';
import {useStore} from "../../../lib/store/useStore";
import {useRouter} from "next/router";
import {useAvailability} from "../../../lib/hooks/useAvailability";
import {displayClassname} from "../../../lib/helpers";

const Floor14Extension = () => {
    const fetch = useStore(state => state.setSelectedApartment)
    const router = useRouter()
    const [six] =  useAvailability('15.06')
    const [five] =  useAvailability('15.05')
    const [four] =  useAvailability('15.04')
    const [three] =  useAvailability('15.03')
    const [two] =  useAvailability('15.02')
    const [one] =  useAvailability('15.01')
    return (
        <>
            <g id="_x31_5.06">
                <polygon className={`st20 ${displayClassname(six)}`} onClick={() => fetch('15.06', Number(router.query.id))}
                         points="754.4,310.8 754.4,341.9 811.4,341.9 811.4,357.6 955.9,357.6 955.9,199.6 736,199.6 736,310.8  "/>
            </g>
            <g id="_x31_5.05">
                <polygon className={`st20 ${displayClassname(five)}`} points="727.7,345.6 807.8,345.6 807.8,359.4 955.9,359.7 955.9,496.7 727.1,496.4  "
                         onClick={() => fetch('15.05', Number(router.query.id))}
                />
            </g>
            <g id="_x31_5.04">
                <polygon className={`st20 ${displayClassname(four)}`} points="597.6,345.6 724,345.6 724,496.4 597.2,496.4  "
                         onClick={() => fetch('15.04', Number(router.query.id))}
                />
            </g>
            <g id="_x31_5.03">
                <polygon className={`st20 ${displayClassname(three)}`} points="467.7,345.6 594.1,345.6 594.1,496.4 467.3,496.4  "
                         onClick={() => fetch('15.03', Number(router.query.id))}
                />
            </g>
            <g id="_x31_5.02">
                <polygon className={`st20 ${displayClassname(two)}`} points="465.1,344.9 422.5,344.9 422.5,360.6 235.8,360.6 235.8,496.4 464.1,496.4  "
                         onClick={() => fetch('15.02', Number(router.query.id))}
                />
            </g>
            <g id="_x31_5.01">
                <polygon className={`st20 ${displayClassname(one)}`} points="388.7,199.6 235.8,199.6 235.8,357.6 386.9,357.6 388.7,347.8 388.7,200.6  "
                         onClick={() => fetch('15.01', Number(router.query.id))}
                />
            </g>
        </>
    );
};

export default Floor14Extension;
