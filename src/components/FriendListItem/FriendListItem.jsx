import clsx from "clsx";
import css from "../FriendListItem/FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const amountClassnames = clsx(
    css.indicator,
    isOnline ? css.online : css.offline
  );
  return (
    <div className={css.container}>
      <img className={css.image} src={avatar} alt="Avatar" />
      <p className={css.name}>{name}</p>
      <p className={amountClassnames}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
