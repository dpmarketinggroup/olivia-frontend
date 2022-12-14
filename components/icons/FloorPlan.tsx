import React, {FunctionComponent} from "react";

interface FloorPlanIcon{
    classname?: string
}

const FloorPlanIcon:FunctionComponent<FloorPlanIcon> = ({
    classname
                                                        }) => {
    return (
        <svg className={classname} width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.8376 0.719971H18.2976V4.98997H24.8076V15.98H4.57762V4.91997H11.0876V0.719971H2.47762C1.28762 0.719971 0.307617 1.69997 0.307617 2.88997V41.18C0.307617 42.37 1.28762 43.35 2.47762 43.35H40.6976C41.8176 43.35 42.7976 42.44 42.9376 41.25V2.88997C43.0076 1.69997 42.0276 0.719971 40.8376 0.719971ZM4.57762 20.25H10.6676V26.62H4.57762V20.25ZM18.7176 39.08H4.57762V30.96H12.7676C13.9576 30.96 14.9376 30.05 15.0076 28.86V20.25H18.7876V39.08H18.7176ZM38.6676 39.08H23.0576V20.25H38.6676V39.08ZM38.6676 15.98H29.1476V4.91997H38.6676V15.98Z" fill="#476761"/>
        </svg>
    );
};

export default FloorPlanIcon;