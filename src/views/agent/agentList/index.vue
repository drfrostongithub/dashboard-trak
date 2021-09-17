<template>
  <div class="app-container">
    <h1>Agent List</h1>
    <!-- Add Button -->
    <!-- Searchbox -->
    <div class="topBox">
      <el-button
        type="success"
      ><i class="el-icon-plus el-icon-left" /> Add New</el-button>
      <div style="display:flex;">
        <el-button type="primary">Download<i class="el-icon-download el-icon-right" /></el-button>
        <el-input
          v-model="search"
          placeholder="Type something"
        >
          <i slot="prefix" class="el-input__icon el-icon-search" />
        </el-input>
      </div>
    </div>

    <el-table
      v-loading="listLoading"
      :data="
        list.filter(
          data =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="#" width="50">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column prop="name" label="Name" sortable />

      <el-table-column label="Phone Number" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.phoneNumber }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Email" align="center">
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>

      <el-table-column prop="area" label="Area" sortable />

      <el-table-column label="Total" align="center">
        <el-table-column prop="total.deposit" label="Deposit" align="center" sortable />
        <el-table-column prop="total.dataSales" label="Data Sales" align="center" sortable />
        <el-table-column label="Total Transaction" align="center">
          <el-table-column prop="total.transaction.all" label="All" align="center" sortable />
          <el-table-column prop="total.transaction.monthly" label="Monthly" align="center" sortable />
        </el-table-column>
      </el-table-column>

      <el-table-column label="Operations">
        <el-row>
          <el-button type="primary" icon="el-icon-edit" circle />
          <el-button type="danger" icon="el-icon-delete" circle />
        </el-row>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { getList } from '@/api/table'
// Hardcode Table Admin + ACO + Agent
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: [
        {
          name: 'Miki',
          phoneNumber: '0886456566',
          email: 'miki@mail.com',
          area: 'CLUSTER DEPOK 02',
          total: {
            achieved: 25,
            target: 100,
            sales: 25,
            transaction: 25
          }
        },
        {
          name: 'Yoko',
          phoneNumber: '0886456566',
          email: 'toko@mail.com',
          area: 'CLUSTER BOGOR 02',
          total: {
            achieved: 10,
            target: 90,
            sales: 25,
            transaction: 25
          }
        }
      ],
      search: '',
      listLoading: false
    }
  },
  created() {
    // this.fetchData()
  },
  methods: {
    // fetchData() {
    //   this.listLoading = false
    //   getList().then(response => {
    //     this.list = response.data.items
    //     this.listLoading = false
    //   })
    // }
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style lang="scss" scoped>
.topBox {
  display: flex;
  // float: right;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 10px;
}
// .operations {
//   display: flex;
// }
</style>
