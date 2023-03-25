// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  newPassword: path(ROOTS_AUTH, '/new-password'),
};

export const PATH_PAGE = {
  page403: '/403',
  page404: '/404',
  page500: '/500',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  overview: {
    root: path(ROOTS_DASHBOARD, '/overview'),
  },
  lecturer: {
    root: path(ROOTS_DASHBOARD, '/lecturer'),
    add: path(ROOTS_DASHBOARD, '/lecturer/add'),
    edit: path(ROOTS_DASHBOARD, '/lecturer/:id/edit'),
  },
  results: {
    root: path(ROOTS_DASHBOARD, '/results'),
    table: path(ROOTS_DASHBOARD, '/results/:id'),
    add: path(ROOTS_DASHBOARD, '/results/add'),
    edit: path(ROOTS_DASHBOARD, '/results/:id/edit'),
  },
  candidatePaper: {
    root: path(ROOTS_DASHBOARD, '/candidate-paper'),
    table: path(ROOTS_DASHBOARD, '/candidate-paper/:id'),
    add: path(ROOTS_DASHBOARD, '/candidate-paper/add'),
    edit: path(ROOTS_DASHBOARD, '/candidate-paper/:id/edit'),
  },
  exam: {
    root: path(ROOTS_DASHBOARD, '/exam'),
    add: path(ROOTS_DASHBOARD, '/exam/add'),
    addCode: path(ROOTS_DASHBOARD, '/exam/add/:code'),
    addSkill: path(ROOTS_DASHBOARD, '/exam/add/:code/:skill'),
    addSection: path(ROOTS_DASHBOARD, '/exam/add/:code/:skill/:section'),
    addSectionQuestion: path(ROOTS_DASHBOARD, '/exam/add/:code/:skill/:section/:questionId'),
    edit: path(ROOTS_DASHBOARD, '/exam/edit/:id'),
  },

  application: {
    root: path(ROOTS_DASHBOARD, '/application'),
    createNew: path(ROOTS_DASHBOARD, '/application/create-new'),
    edit: path(ROOTS_DASHBOARD, '/application/:id/edit'),
  },
  room: {
    root: path(ROOTS_DASHBOARD, '/exam-room'),
    createNew: path(ROOTS_DASHBOARD, '/exam-room/create-new'),
    edit: path(ROOTS_DASHBOARD, '/exam-room/:id/edit'),
  },
  schedule: {
    root: path(ROOTS_DASHBOARD, '/schedule'),
    createNew: path(ROOTS_DASHBOARD, '/schedule/create-new'),
    edit: path(ROOTS_DASHBOARD, '/schedule/:id/edit'),
  },
  candidate: {
    root: path(ROOTS_DASHBOARD, '/candidate'),
    table: path(ROOTS_DASHBOARD, '/candidate/:id'),
    add: path(ROOTS_DASHBOARD, '/candidate/:id/add/'),
    edit: path(ROOTS_DASHBOARD, '/candidate/:id/edit'),
  },
  profileColection: {
    root: path(ROOTS_DASHBOARD, '/profileColection'),
    add: path(ROOTS_DASHBOARD, '/profileColection/add'),
    edit: path(ROOTS_DASHBOARD, '/candidate/:id/edit'),
  },

  certificates: {
    root: path(ROOTS_DASHBOARD, '/certificates'),
    table: path(ROOTS_DASHBOARD, '/certificates/:id'),
    add: path(ROOTS_DASHBOARD, '/certificates/add'),
    edit: path(ROOTS_DASHBOARD, '/certificates/:id/edit'),
  },

};

export const PATH_DOCS = {
  root: 'https://docs.minimals.cc',
  changelog: 'https://docs.minimals.cc/changelog',
};
