import axios from 'axios'

export default {
  data() {
    return {
      questData: []
    }
  },
  mounted() {
    let data = ''

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:8000/api/getQuests',
      headers: {},
      data: data
    }

    axios
      .request(config)
      .then((response) => {
        this.questData = response.data
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
