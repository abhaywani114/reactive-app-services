import { request, gql } from 'graphql-request'
import constants from './constants.js'

const getSlider = async () => {
    const query = gql`
    query MyQuery {
        sliders {
          name
          id
          image {
            url
          }
        }
      }      
   `
   const data = await request(constants.ContentAPIEndPoint, query)
   return data
}

const getCategories = async () => {
  const query = gql`
  query Category {
    categories {
      id
      name
      icon {
        url
      }
    }
  }      
 `
 const data = await request(constants.ContentAPIEndPoint, query)
 return data
}

const getBussinessList = async () => {
  const query = gql`
  query MyQuery {
    businessLists {
      name
      conactPerson
      image {
        url
      }
      category {
        name
      }
    }
  }
  `
  const data = await request(constants.ContentAPIEndPoint, query)
  return data
}

const getBusinessListByCategory = async (category) => {
  const query = gql`
  query MyQuery {
    businessLists(where: {category: {name: "${category}"}}) {
      name
      conactPerson,
      address,
      image {
        url
      }
      category {
        name
      }
    }
  }
  `
  const data = await request(constants.ContentAPIEndPoint, query)
  return data
}

export default {
    getSlider,
    getCategories,
    getBussinessList,
    getBusinessListByCategory
}