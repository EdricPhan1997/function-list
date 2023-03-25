const ENDPOINT = {
  //File
  FILE: '/api/file/upload-file',
  MULTIFILE: '/api/file/upload-multiple-files',

  // LOGIN: '/api/account/login',
  LOGIN: '/api/authenticate/login',
  LOGOUT: '/api/authenticate/logout',
  CHANGE_PASSWORD: 'change_password',
  WHO_AM_I: 'who_am_i',
  REFRESH_TOKENS: 'refresh_tokens',
  REGISTER: '/api/account/register',

  //dashboard
  OVERVIEW: 'overview',
  LECTURER: '/api/user',
  PROFILECOLECTIONPOINT: '/api/user',

  EXAM_SECTION: '/api/concordance',
  EXAM: '/api/test-exam-set',
  EXAM_QUESTION: '/api/question',
  EXAM_SKILL: '/api/exam',

  ANSWER: '/api/answer',
  ROLE: '/api/role',
  CANDIDATE: '/api/student-profile',
  PROFILE_GROUP: '/api/profile-group',
  CANDIDATE_PAPER: '/api/student-profile',
  CANDIDATE_PAPER_FOLDER: '/api/profile-group',

  RESULT: '/api/student-profile',
  RESULT_FOLDER: '/api/profile-group',

  CERTIFICATE: '/api/student-profile',
  CERTIFICATE_FOLDER: '/api/profile-group',

  EXAM_ROOM: '/api/examination-Room',
};
export default ENDPOINT;
