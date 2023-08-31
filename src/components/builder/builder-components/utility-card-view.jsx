import image from '../../../../assets/pointsix-bg-vector.webp';
import icon from '../../../../assets/utilityCard.svg';

const UtilityBuilderCard = (props) => {
  return (
    <div
      className="my-4 w-full cursor-pointer rounded-3xl border-2 border-gray-300 p-4"
      onClick={() =>
        props.setUtility({
          ...props.utility,
          name: props.utilityName,
          claims: props.claims,
        })
      }
    >
      <div className="flex items-center">
        <img
          src={image}
          alt={'img'}
          className="h-20 w-20 rounded-xl border-2 border-black"
        />
        <div className="ml-8">
          <div className="flex items-center">
            <img src={icon} alt={'img'} />
            <p className="ml-1 text-base text-gray-500">
              {props.collectionName}
            </p>
          </div>
          <p className="text-2xl text-gray-700">{props.utilityName}</p>
          <p className="text-base text-gray-600">{props.claims}</p>
        </div>
      </div>
    </div>
  );
};

export default UtilityBuilderCard;
