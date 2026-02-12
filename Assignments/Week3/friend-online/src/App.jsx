import { useEffect, useState } from "react";

function useFriendStatus(friendId){
  const [status, setStatus] = useState(null);

  useEffect(() => {
        const timer = setInterval(() => {
          setStatus(Math.random() > 0.5 ? "online" : "offline");
        },1000);

    return () => clearTimeout(timer);
  }, [friendId]);

  return status;

}
function Friend({id}){
    const status = useFriendStatus(id);

    return <h2>Friend is {status}</h2>
}

export default Friend;
