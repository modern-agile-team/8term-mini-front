import Swal from 'sweetalert2';
const baseUrl = import.meta.env.VITE_IMG_BASE_URL;

/**@성공알림창 */
export const successAlert = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'success',
    confirmButtonText: '확인',
  });
};

/**@에러알림창 */
export const errorAlert = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'error',
    confirmButtonText: '확인',
  });
};

/**@경고알림창 */
export const warningAlert = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    confirmButtonText: '확인',
  });
};

/**@삭제확인알림창 */
export const confirmDeleteAlert = (title, text) => {
  return Swal.fire({
    title: title,
    text: text,
    showCancelButton: true,
    confirmButtonText: '삭제',
    cancelButtonText: '취소',
  });
};

/**@회원가입성공알림창 */
export const registerSuccessAlert = (title, text) => {
  Swal.fire({
    title: title || '회원가입 성공 !',
    text: text || '회원가입이 완료되었습니다.',
    imageUrl: `${baseUrl}RegisterSuccess.png`,
    background: '#000000',
    color: '#F7F9F3',
    confirmButtonText: '확인',
    confirmButtonColor: '#000000',
    didOpen: () => {
      const confirmButton = Swal.getConfirmButton();
      confirmButton.style.border = '2px solid #F7F9F3';
      confirmButton.style.padding = '5px 20px';
      confirmButton.style.borderRadius = '10px';
      confirmButton.style.color = '#F7F9F3';
    },
  });
};

/**@로그인성공알림창 */
export const loginSuccessAlert = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: toast => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

/**@로그인필요알림창 */
export const confirmLoginAlert = (title, text, confirm, cancel) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: confirm,
    cancelButtonText: cancel,
  }).then(result => {
    if (result.isConfirmed) {
      window.location.href = '/login';
    }
  });
};

/**@찜확인알림창 */
export const confirmWishListAlert = (title, like) => {
  return Swal.fire({
    title: `${title}`,
    text: like
      ? '찜 목록에서 제거하시겠습니까? '
      : '찜 목록에 추가하시겠습니까?',
    showCancelButton: true,
    confirmButtonText: '확인',
    cancelButtonText: '취소',
  });
};

/**@로그아웃확인알림창 */
export const confirmLogoutAlert = () => {
  return Swal.fire({
    title: '로그아웃을 하시겠습니까?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '확인',
    confirmButtonColor: '#F7F9F3',
    cancelButtonText: '취소',
    cancelButtonColor: '#B5B5B5',
    background: '#F7F9F3',
    color: '#000000',
    didOpen: () => {
      const confirmButton = Swal.getConfirmButton();
      confirmButton.style.border = '2px solid #000000';
      confirmButton.style.padding = '5px 20px';
      confirmButton.style.borderRadius = '10px';
      confirmButton.style.color = '#000000';
      const cancelButton = Swal.getCancelButton();
      cancelButton.style.border = '2px solid #B5B5B5';
      cancelButton.style.padding = '5px 20px';
      cancelButton.style.borderRadius = '10px';
      cancelButton.style.color = '#F7F9F3';
    },
  });
};
