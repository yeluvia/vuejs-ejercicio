<template>
  <CRow>
    <CCol col="12" xl="12">
      <CCard>
        <CCardHeader>
          <div>Lenguajes</div>
        </CCardHeader>
        <br>
        <CCol col="2" sm="2" md="2" xl class="mb-3 mb-xl-0">
            <CButton color="info">Nuevo programador</CButton>
        </CCol> 
        <CCardBody>
          <CDataTable
            hover
            striped
            :items="datos"
            :fields="fields"
            :items-per-page="10"
            :active-page="activePage"
            :pagination="{ doubleArrows: false, align: 'center'}"
            @page-change="pageChange"
          >

          <template #acciones="data">
            <td>

              <div class="btn-group mr-2"
                role="group"
                aria-label="First group"
              >
                <button class="btn btn-info">Actualizar</button>
                <button class="btn btn-success">Eliminar</button>
              </div>
            </td>
          </template>
            
          </CDataTable>


          <sweet-modal ref="nuevo_lenguaje" :title="titleModal" hide-close-button blocking>
            <!-- INICIA FORMULARIO -->
            <div class="form-group">
              <CInput
                label="Nombre programador"
                placeholder="Ingresa el nombre del programador"
                v-model="nombre_programador"
              />
              <CInput
                label="Edad programador"
                placeholder="Ingresa la edad del programador"
                v-model="edad_programador"
                type="number"
                min="0"
              />
            </div>
            
            <!-- TERMINA FORMULARIO -->
            <!-- BOTONES -->
            <button slot="button" type="button" class="btn btn-danger">Cancelar</button>
            <button
              slot="button"
              type="button"
              class="btn btn-info"
              data-style="expand-right"
              v-if="tipoAccion == 1"
            >Guardar</button>
            <button
              slot="button"
              type="button"
              class="btn btn-info"
              data-style="expand-right"
              v-if="tipoAccion == 2"
              @click="updateUser()"
            >Actualizar</button>
            <!-- BOTONES -->
          </sweet-modal>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios';
import { SweetModal, SweetModalTab } from "sweet-modal-vue";

export default {
  components: {
    SweetModal,
    SweetModalTab
  },
  name: 'Programadores',
  data () {
    return {
      fields: [
        { key: 'id_programador', label: 'Id'},
        { key: 'nombreprogramador', label: 'Nombre', _classes: 'font-weight-bold' },
        { key: 'edad_programador', label: 'Edad'},
        { key: 'acciones', label: 'Acciones'}
      ],
      activePage: 1,
      datos: null,
      titleModal: "",
      tipoAccion: 1,
      id_programador: 0,
      nombre_programador: '',
      edad_programador: 0,
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page)
        }
      }
    }
  },
  methods: {
    pageChange (val) {
      this.$router.push({ query: { page: val }})
    },
  },
  mounted(){
    
  },
}
</script>