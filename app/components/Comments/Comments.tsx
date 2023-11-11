import Comment from "./Comment";

import cubeImage from "@/public/cube.png";

const comments = [
   {
      id: 1,
      userId: 1,
      userName: "fofo",
      userImage: cubeImage,
      userRating:4,
      text: "it is very good !",
      date: new Date().toLocaleDateString("en-Gb")
   },
   {
      id: 2,
      userId: 1,
      userName: "fofo",
      userImage: cubeImage,
      userRating:4,
      text: "it is very good !",
      date: new Date().toLocaleDateString("en-Gb")
   },
   {
      id: 3,
      userId: 1,
      userName: "fofo",
      userImage: cubeImage,
      userRating:4,
      text: "it is very good !",
      date: new Date().toLocaleDateString("en-Gb")
   },
   {
      id: 4,
      userId: 1,
      userName: "fofo",
      userImage: cubeImage,
      userRating:4,
      text: "it is very good !",
      date: new Date().toLocaleDateString("en-Gb")
   },
   {
      id: 5,
      userId: 1,
      userName: "fofo",
      userImage: cubeImage,
      userRating:4,
      text: "it is very good !",
      date: new Date().toLocaleDateString("en-Gb")
   },
];

function Comments() {
   return (
      <div className="flex flex-col justify-start items-stretch">
         {
            comments.map(
               e => <Comment
                  key={e.id}
                  id={e.id}
                  userId={e.userId}
                  userName={e.userName}
                  userImageURL={e.userImage}
                  userRating={e.userRating}
                  text={e.text}
                  date={e.date}
               />
            )
         }
      </div>
   );
}

export default Comments;