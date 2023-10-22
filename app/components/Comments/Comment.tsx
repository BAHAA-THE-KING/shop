function Comment(
   { id, userId, userName, userImageURL, text }: {
      id: number,
      userId: number,
      userName: string,
      userImageURL: any,
      text: string,
   }
) {
   return (
      <div>Comment</div>
   );
}

export default Comment;