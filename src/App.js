import React from 'react';
import { Admin, Resource, Delete} from 'admin-on-rest';

import ConceptIcon from 'material-ui/svg-icons/action/book';
// import UserIcon from 'material-ui/svg-icons/social/group';

import Dashboard from './dashboard'

import { ConceptList, ConceptEdit, ConceptCreate, ConceptShow } from './concepten';

import myApiRestClient from './restclient';

const App = () => (
    <Admin dashboard={Dashboard} title="DSO - GCO beheer" restClient={myApiRestClient}>
        <Resource name="concepten" options={{ label : 'Concepten' }} list={ConceptList} edit={ConceptEdit} show={ConceptShow} create={ConceptCreate} remove={Delete} icon={ConceptIcon} />
    </Admin>
);

export default App;
