import Contacts from '../contacts/Contacts';
import './rightBar.scss';

function RightBar() {
  return (
    <>
      <div className="rightBar">
        <div className="sponsored">
          <h4> Sponsored </h4>
          <div className="advertisingImg">
            <img src="/photos/advertising-5.jpg" alt="" />
          </div>
        </div>
        <hr />
        <div className="birthdays">
          <h4> Birthdays </h4>
          <div className="giftBirthday">
            <img src="/photos/gift.png" alt="birthdayGift" />
            <span> <b> Emily Jason </b> and <b> 2 others </b> have birthday's today </span>
          </div>
        </div>
        <hr />

        <Contacts />
      </div>
    </>
  )
}

export default RightBar