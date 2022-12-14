import React from 'react';
import {useStore} from "../../../lib/store/useStore";
import {useRouter} from "next/router";
import {useAvailability} from "../../../lib/hooks/useAvailability";
import {displayClassname} from "../../../lib/helpers";

const Floor4Extension = () => {
    const fetch = useStore(state => state.setSelectedApartment)
    const router = useRouter();
    const [twelve] =  useAvailability('05.12')
    const [eleven] =  useAvailability('05.11')
    const [ten] =  useAvailability('05.10')
    const [nine] =  useAvailability('05.09')
    const [eight] =  useAvailability('05.08')
    const [seven] =  useAvailability('05.07')
    const [six] =  useAvailability('05.06')
    const [five] =  useAvailability('05.05')
    const [four] =  useAvailability('05.04')
    const [three] =  useAvailability('05.03')
    const [two] =  useAvailability('05.02')
    const [one] =  useAvailability('05.01')
    return (
        <>
            <g id="_x30_5.12">
                <g id="_x31_4.12_1_">
                    <polygon className={`st19 ${displayClassname(twelve)}`} onClick={() => fetch('05.12', Number(router.query.id))}
                             points="640.4,60.7 624,60.7 616.9,60.7 566.2,60.7 566.2,165.4 535.4,165.4 535.4,216.9 598,216.9     598,178.4 624,178.4 624,136.1 640.4,136.1   "/>
                </g>
            </g>
            <g id="_x30_5.11">
                <g id="_x31_4.11">
                    <polygon className={`st19 ${displayClassname(eleven)}`} onClick={() => fetch('05.11', Number(router.query.id))}
                             points="786.8,60.7 644,60.7 644,138 626.6,138 626.6,182 601.7,182 601.7,216.9 627.6,216.9 627.6,204.1     671.6,204.1 671.6,216.1 736,216.1 736,204.1 736,194.7 736,143.4 786.8,143.4   "/>
                </g>
            </g>
            <g id="_x30_5.10">
                <g id="_x31_4.10">
                    <polygon className={`st19 ${displayClassname(ten)}`} onClick={() => fetch('05.10', Number(router.query.id))}
                             points="786.9,146.5 734.8,146.5 734.8,218.6 669.2,218.6 669.2,206 629.1,206 629.1,228.2 630.6,228.2     630.6,289.4 786.8,289.4 786.8,224.5 786.9,224.5   "/>
                </g>
            </g>
            <g id="_x30_5.09">
                <g id="_x31_4.09">
                    <polygon className={`st19 ${displayClassname(nine)}`} onClick={() => fetch('05.09', Number(router.query.id))}
                             points="786.9,293 630.7,293 630.7,330.8 624.5,330.8 624.5,438.6 759.2,438.6 759.2,423.3 786.9,423.3       "/>
                </g>
            </g>
            <g id="_x30_5.08">
                <g id="_x31_4.08">
                    <polygon className={`st19 ${displayClassname(eight)}`} onClick={() => fetch('05.08', Number(router.query.id))}
                             points="600.1,330.9 600.1,300.4 597.9,300.4 597.9,248.2 556.6,248.2 556.6,300.4 493.7,300.4 493.7,438.6     621.3,438.6 621.3,330.9   "/>
                </g>
            </g>
            <g id="_x30_5.07">
                <g id="_x31_4.07">
                    <polygon className={`st19 ${displayClassname(seven)}`} onClick={() => fetch('05.07', Number(router.query.id))}
                             points="554.3,250 491.6,250 491.6,206 426.4,206 426.4,438.6 491.6,438.6 491.6,298.9 554.3,298.9   "/>
                </g>
            </g>
            <g id="_x30_5.06">
                <g id="_x31_4.06">
                    <polygon className={`st19 ${displayClassname(six)}`} onClick={() => fetch('05.06', Number(router.query.id))}
                             points="359.7,206 359.7,250 297,250 297,298.9 359.7,298.9 359.7,300.1 372.3,300.1 372.3,306.9     359.7,306.9 359.7,438.6 424.9,438.6 424.9,206   "/>
                </g>
            </g>
            <g id="_x30_5.05">
                <g id="_x31_4.05">
                    <polygon className={`st19 ${displayClassname(five)}`} onClick={() => fetch('05.05', Number(router.query.id))}
                             points="358.3,300.3 296.1,300.3 296.1,305.2 294.5,305.2 294.5,248.5 252.1,248.5 252.1,330.6 229.8,330.6     229.4,438.5 358.3,438.5 358.3,342.5 358.3,342.5   "/>
                </g>
            </g>
            <g id="_x30_5.04">
                <g id="_x31_4.04">
                    <polygon className={`st19 ${displayClassname(four)}`} onClick={() => fetch('05.04', Number(router.query.id))}
                             points="219.2,330 219.2,292.2 98.7,292.2 98.7,290.8 64.3,290.8 64.3,423.2 92.5,423.2 92.5,438.1     212,438.1 212,438.6 227.5,438.6 227.5,330   "/>
                </g>
            </g>
            <g id="_x30_5.03">
                <g id="_x31_4.03">
                    <polygon className={`st19 ${displayClassname(three)}`} onClick={() => fetch('05.03', Number(router.query.id))}
                             points="220.4,207 183.5,207 183.5,216.1 113.6,216.1 113.6,146.1 64.3,146.1 64.3,289 97,289 97,290     196.9,290 196.9,289 220.4,289   "/>
                </g>
            </g>
            <g id="_x30_5.02">
                <g id="_x31_4.02">
                    <polygon className={`st19 ${displayClassname(two)}`} onClick={() => fetch('05.02', Number(router.query.id))}
                             points="209.7,170 209.7,60.7 64.3,60.7 64.3,144 114.5,144 114.5,216.9 182.9,216.9 182.9,205.5 223,205.5     223,216.9 249,216.9 249,207.2 249,170   "/>
                </g>
            </g>
            <g id="_x30_5.01">
                <g id="_x31_4.01">
                    <polygon className={`st19 ${displayClassname(one)}`} onClick={() => fetch('05.01', Number(router.query.id))}
                             points="255.4,60.7 252.6,60.7 211.4,60.7 211.4,167.6 252.6,167.6 252.6,216.9 319.4,216.9 319.4,60.7       "/>
                </g>
            </g>
        </>
    );
};

export default Floor4Extension;
