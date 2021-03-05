<template>
  <div>
    <CRow>
      <CCol col="12" xl="12">
        <CCard>
           <CCardHeader>
          <h1>¡Bienvenido a la plantilla para el ejercicio!</h1>
        </CCardHeader>
          <CCardBody>
            <label>{{texto1}}</label>
          </CCardBody>
        </CCard>
      </CCol>
    
    </CRow>
     <CRow>
      <CCol sm="9" md="6">
        <CCard>
          <CCardHeader><CIcon name="cil-user"/> Yeny Santos</CCardHeader>
          <CCardBody><strong>Correo: </strong>eluvia@mesoamericana.edu.gt</CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>

export default {
  name: 'Cards',
  data: function () {
    return {
      show: true,
      isCollapsed: true,
      texto1: '¡En este proyecto podrá realizar operaciones CRUD desde su API!',
      texto2: '¡Cualquier duda o consulta puedes realizarla al equipo de desarrollo!',
    }
  }
}
</script>
