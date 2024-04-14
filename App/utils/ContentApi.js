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
      id
      name
      conactPerson
      address
      description
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

const addBooking = async ({userName, userEmail, date, time, businessId}) => {
  const mutation = gql`
  mutation AddBooking {
    createBooking(
      data: {
        bookingStatus: Booked, 
        userName: "${userName}", 
        userEmail: "${userEmail}", 
        date: "${date}",
        time: "${time}", 
        businessList: {connect: {id: "${businessId}"}}}
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
    }
  }
  `

  const data = await request(constants.ContentAPIEndPoint, mutation)
  return data
}

const getMyBookings = async (email) => {
  const query = gql`
  query MyQuery {
    bookings(where: {userEmail: "${email}"}) {
      userEmail
      userName
      id
      date
      time
      bookingStatus
      businessList {
        conactPerson
        name
        image {
          url
        }
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
    getBusinessListByCategory,
    addBooking,
    getMyBookings
}