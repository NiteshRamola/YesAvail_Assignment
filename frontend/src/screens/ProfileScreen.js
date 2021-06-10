import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button, Table } from 'react-bootstrap'
import {Helmet} from "react-helmet";
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listMyOrders } from '../Redux/actions/orderActions'

function ProfileScreen({ history }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('Profile')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const orderListMy = useSelector((state) => state.orderListMy)
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

    useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
        dispatch(listMyOrders())
      setName(userInfo.name)
      setEmail(userInfo.email)
      setTitle(userInfo.name)
    }
  }, [dispatch, history, userInfo])
  return (
    <Row>
      <Helmet>
        <title>{name}</title>
        <meta name='description' content='Profile page' />
      </Helmet>
      <Col md={3}>
        <h2>User Profile</h2>
        <Form>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type='name'
              value={name}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type='email'
              value={email}
            ></Form.Control>
          </Form.Group>
        </Form>
      </Col>

      <Col md={9}>
        <h2>My Orders</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant='danger'>{errorOrders}</Message>
        ) : (
          <Table striped responsive className='table-sm'>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Order_ID</th>
                <th>Date</th>
                <th>Total Price</th>
                <th>Paid</th>
                <th>Delivered</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, value) => (
                <tr key={order._id}>
                  <td>{value + 1}</td>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>₹{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className='btn-sm'>Details</Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  )
}

export default ProfileScreen
