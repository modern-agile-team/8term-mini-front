import Swal from 'sweetalert2';

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
  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '삭제',
  }).then(result => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Deleted!',
        text: '성공적으로 삭제되었습니다.',
        icon: 'success',
      });
    }
  });
};
