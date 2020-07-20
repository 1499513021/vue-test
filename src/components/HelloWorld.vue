<template>
  <div class="">
    <input type="text" v-model="msg">
    <ul>
      <li v-for="item in filterBy(list,msg)" :key="item.index">
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: '',
        list: ['1', '2', '3'],
        list1: [
          {
            "name": "henry33333333333333333",
            "phone": "12345677",
            "email": "dfsa@qq.com",
            "id": 1,
            "age": 20,
            "companyId": 1,
            "education": "dddd",
            "graduationSchool": "qinghua",
            "profession": "hr"
          }
        ]
      }
    },
    methods:{
      filterBy(list,msg){
        return list.filter( (item) => {
          return item.match(msg)
        })
      }
    },
    created() {
    }
  }
</script>