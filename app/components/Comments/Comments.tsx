import Comment from "./Comment";

import cubeImage from "@/public/cube.png";

const comments = [
   {
      id: 1,
      userId: 1,
      userName: "fofo",
      userImage: cubeImage,
      text: "it is very good !"
   },
   {
      id: 2,
      userId: 1,
      userName: "fofo",
      userImage: cubeImage,
      text: "it is very good !"
   },
   {
      id: 3,
      userId: 1,
      userName: "fofo",
      userImage: cubeImage,
      text: "it is very good !"
   },
   {
      id: 4,
      userId: 1,
      userName: "fofo",
      userImage: cubeImage,
      text: "it is very good !"
   },
   {
      id: 5,
      userId: 1,
      userName: "fofo",
      userImage: cubeImage,
      text: "it is very good !"
   },
];

function Comments() {
   return (
      <div>
         {
            comments.map(
               e => <Comment
                  id={e.id}
                  userId={e.userId}
                  userName={e.userName}
                  userImageURL={e.userImage}
                  text={e.text}
               />
            )
         }
      </div>
   );
}

export default Comments;