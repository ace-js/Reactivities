import React, { useState, FormEvent } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import {v4 as uuid} from 'uuid'

import IActivity from '../../../app/models/activity'

interface IProps {
  activity: IActivity
  setEditMode: (editMode: boolean) => void
  createActivity: (activity: IActivity) => void
  editActivity: (activity: IActivity) => void
}

const ActivityForm: React.FC<IProps> = ({
  activity: initialFormState,
  setEditMode,
  createActivity,
  editActivity
}) => {
  const initializeForm = () =>
    initialFormState
      ? initialFormState
      : {
          id: '',
          title: '',
          description: '',
          category: '',
          date: '',
          city: '',
          venue: ''
        }

  const [activity, setActivity] = useState<IActivity>(initializeForm())

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (activity.id.length > 0) {
      editActivity(activity)
    } else {
      const newActivity = {
        ...activity,
        id: uuid()
      }
      createActivity(newActivity)
    }
  }

  const onChangeHandler = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget
    setActivity({
      ...activity,
      [name]: value
    })
  }

  return (
    <Segment clearing>
      <Form onSubmit={onSubmitHandler}>
        <Form.Input
          placeholder='Title'
          name='title'
          value={activity.title}
          onChange={onChangeHandler}
        />
        <Form.TextArea
          rows={2}
          placeholder='Description'
          name='description'
          value={activity.description}
          onChange={onChangeHandler}
        />
        <Form.Input
          placeholder='Category'
          name='category'
          value={activity.category}
          onChange={onChangeHandler}
        />
        <Form.Input
          type='datetime-local'
          placeholder='Date'
          name='date'
          value={activity.date}
          onChange={onChangeHandler}
        />
        <Form.Input
          placeholder='City'
          name='city'
          value={activity.city}
          onChange={onChangeHandler}
        />
        <Form.Input
          placeholder='Venue'
          name='venue'
          value={activity.venue}
          onChange={onChangeHandler}
        />
        <Button floated='right' positive type='submit' content='Submit' />
        <Button
          onClick={() => setEditMode(false)}
          floated='right'
          type='button'
          content='Cancel'
        />
      </Form>
    </Segment>
  )
}

export default ActivityForm
