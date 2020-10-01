import Vue from 'vue';
import Router from 'vue-router';

import Imoveis from '@/components/pages/Imoveis';
import CreateImmobile from '@/components/pages/CreateImmobile';
import Members from '@/components/pages/Members';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'Imoveis',
      component: Imoveis,
    },
    {
      path: '/immobile/create',
      name: 'CreateImmobile',
      component: CreateImmobile,
    },
    {
      path: '/members/:id',
      name: 'Members',
      component: Members,
    },
  ],
});
