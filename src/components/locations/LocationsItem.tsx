import { memo } from 'react';
import { ILocations } from '../../mechanics/Locations';

interface ILocationsItemProps {
    mainClass: string
    handleClick: () => void
    location: ILocations
}

const LocationsItem = ({ mainClass, handleClick, location }: ILocationsItemProps) => {
    const { background, isCompleted, name } = location

    return (
        <div
            className={`${mainClass}__modal-item`}
            onClick={handleClick}
        >
            <img src={background} style={!isCompleted ? { filter: "grayscale(1)" } : {}} />
            <span>{name}</span>
        </div>
    );
};

export default memo(LocationsItem);