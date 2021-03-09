<template>
  <CRow>
    <CCol col="12" xl="12">
      <CCard>
        <CCardHeader>
          <div>Lenguajes</div>
        </CCardHeader>
        <br>
        <CCol col="2" sm="2" md="2" xl class="mb-3 mb-xl-0">
            <CButton color="info">Nuevo lenguaje</CButton>
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
                <button class="btn btn-danger">Eliminar</button>
              </div>
            </td>
          </template>
            
          </CDataTable>


          <sweet-modal ref="nuevo_lenguaje" :title="titleModal" hide-close-button blocking>
            <!-- INICIA FORMULARIO -->
            <div class="form-group">
              <CInput
                label="Nombre"
                placeholder="Ingresa el nombre del lenguaje"
                v-model="nombre_lenguaje"
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
  name: 'Lenguajes',
  data () {
    return {
      fields: [
        { key: 'id_lenguaje', label: 'Id'},
        { key: 'nombre_lenguaje', label: 'Nombre', _classes: 'font-weight-bold' },
        { key: 'acciones', label: 'Acciones'}
      ],
      activePage: 1,
      datos: null,
      titleModal: "",
      tipoAccion: 1,
      id_lenguaje: 0,
      nombre_lenguaje: '',
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
