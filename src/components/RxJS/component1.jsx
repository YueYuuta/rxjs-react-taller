import { sharingInformationService } from '../../services/sharing-information.services';

function Component1() {
  const handleClick = () => {
    sharingInformationService.setSubject = true;
  };
  const handleClickNot = () => {
    sharingInformationService.setSubject = false;
  };
  return (
    <div>
      <button onClick={handleClick}>send information</button>
      <button onClick={handleClickNot}>not send information</button>
    </div>
  );
}
export default Component1;
