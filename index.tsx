
document.addEventListener('DOMContentLoaded', () => {
  const commentForm = document.getElementById('comment-form') as HTMLFormElement | null;
  const nameInput = document.getElementById('name-input') as HTMLInputElement | null;
  const commentInput = document.getElementById('comment-input') as HTMLTextAreaElement | null;
  const commentList = document.getElementById('comment-list') as HTMLUListElement | null;

  if (!commentForm || !nameInput || !commentInput || !commentList) {
    console.error('필요한 DOM 요소를 찾을 수 없습니다.');
    return;
  }

  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value.trim() || '익명';
    const commentText = commentInput.value.trim();

    if (commentText === '') {
      // 댓글 내용이 비어있으면 아무것도 하지 않음
      return;
    }

    addComment(name, commentText);

    // 입력 필드 초기화
    nameInput.value = '';
    commentInput.value = '';
  });

  function addComment(name: string, text: string) {
    if (!commentList) return;

    const listItem = document.createElement('li');
    listItem.className = 'comment-item';

    const authorElement = document.createElement('strong');
    authorElement.textContent = name;

    const commentTextElement = document.createElement('p');
    commentTextElement.textContent = text;

    listItem.appendChild(authorElement);
    listItem.appendChild(commentTextElement);

    commentList.appendChild(listItem);
    
    // 새 댓글이 추가될 때 부드럽게 스크롤
    listItem.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
});
