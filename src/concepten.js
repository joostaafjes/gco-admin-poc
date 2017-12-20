import React from 'react';
import { List, Filter, Edit, Create, Datagrid, TextField, DateField, UrlField, DateInput, EditButton, DisabledInput, LongTextInput, SimpleForm, TextInput } from 'admin-on-rest';


const ConceptFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const ConceptList = (props) => (
    <List title="Concepten" filters={<ConceptFilter />} {...props} >
        <Datagrid>
            <TextField source="concept_label" />
            <TextField source="uitleg" />
            <EditButton />
        </Datagrid>
    </List>
);

const ConceptTitle = ({ record }) => {
    return <span>Concept {record ? `${record.naam}` : ''}</span>;
};

export const ConceptEdit = (props) => (
    <Edit title={<ConceptTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="concept" />
            <TextInput source="concept_label" />
            <LongTextInput source="uitleg" />
            <LongTextInput source="type" />
            <TextInput source="naam" />
            <TextInput source="term" />
            <TextInput source="notitie" />
            <TextInput source="toelichting" />
            <LongTextInput source="definitie" />
            <TextInput source="bron" />
            <LongTextInput source="domein" />
            <TextInput source="isSpecialisatieVan" />
            <TextInput source="isGeneralisatieVan" />
            <TextInput source="isOnderdeelVan" />
            <TextInput source="bestaatUit" />
            <TextInput source="heeftBetrekkingOp" />
            <TextInput source="synoniem" />
            <TextInput source="startdatumVersie" />
            <TextInput source="einddatumVersie" />
            <DateInput source="startdatumGeldigheid" />
            <DateInput source="einddatumGeldigheid" />
            <LongTextInput source="laatsteActiviteit" />
            <LongTextInput source="lidVan" />
            <TextInput source="isGerealiseerdIn" />
            <TextInput source="isOngeveerHetzelfdeAls" />
            <TextInput source="isHetzelfdeAls" />
            <TextInput source="zieOok" />
            <TextInput source="isBrederDan" />
            <TextInput source="isEngerDan" />
        </SimpleForm>
    </Edit>
);

export const ConceptCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="concept_label" />
            <LongTextInput source="uitleg" />
            <LongTextInput source="type" />
            <TextInput source="naam" />
            <TextInput source="term" />
            <TextInput source="notitie" />
            <TextInput source="toelichting" />
            <LongTextInput source="definitie" />
            <TextInput source="bron" />
            <LongTextInput source="domein" />
            <TextInput source="isSpecialisatieVan" />
            <TextInput source="isGeneralisatieVan" />
            <TextInput source="isOnderdeelVan" />
            <TextInput source="bestaatUit" />
            <TextInput source="heeftBetrekkingOp" />
            <TextInput source="synoniem" />
            <TextInput source="startdatumVersie" />
            <TextInput source="einddatumVersie" />
            <DateInput source="startdatumGeldigheid" />
            <DateInput source="einddatumGeldigheid" />
            <LongTextInput source="laatsteActiviteit" />
            <LongTextInput source="lidVan" />
            <TextInput source="isGerealiseerdIn" />
            <TextInput source="isOngeveerHetzelfdeAls" />
            <TextInput source="isHetzelfdeAls" />
            <TextInput source="zieOok" />
            <TextInput source="isBrederDan" />
            <TextInput source="isEngerDan" />
        </SimpleForm>
    </Create>
);

export const ConceptShow = (props) => (
    <Edit title={<ConceptTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="concept" />
            <TextField source="concept_label" />
            <TextField source="uitleg" />
            <TextField source="type" />
            <TextField source="naam" />
            <TextField source="term" />
            <TextField source="notitie" />
            <TextField source="toelichting" />
            <TextField source="definitie" />
            <TextField source="bron" />
            <UrlField source="domein" />
            <TextField source="isSpecialisatieVan" />
            <TextField source="isGeneralisatieVan" />
            <TextField source="isOnderdeelVan" />
            <TextField source="bestaatUit" />
            <TextField source="heeftBetrekkingOp" />
            <TextField source="synoniem" />
            <TextField source="startdatumVersie" />
            <TextField source="einddatumVersie" />
            <DateField source="startdatumGeldigheid" />
            <DateField source="einddatumGeldigheid" />
            <TextField source="laatsteActiviteit" />
            <UrlField source="lidVan" />
            <TextField source="isGerealiseerdIn" />
            <TextField source="isOngeveerHetzelfdeAls" />
            <TextField source="isHetzelfdeAls" />
            <TextField source="zieOok" />
            <TextField source="isBrederDan" />
            <TextField source="isEngerDan" />
        </SimpleForm>
    </Edit>
);
