import React from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import IActivity from '../../../app/models/activity'

interface IProps {
  activity: IActivity
  setEditMode: (editMode: boolean) => void
}

const ActivityForm: React.FC<IProps> = ({ activity, setEditMode }) => {
  return (
    <Segment clearing>
      <Form>
        <Form.Input
          placeholder='Title'
          value={activity ? activity.title : ''}
        />
        <Form.TextArea
          rows={2}
          placeholder='Description'
          value={activity ? activity.description : ''}
        />
        <Form.Input
          placeholder='Category'
          value={activity ? activity.category : ''}
        />
        <Form.Input
          type='date'
          placeholder='Date'
          value={activity ? activity.date : Date.now}
        />
        <Form.Input placeholder='City' value={activity ? activity.city : ''} />
        <Form.Input
          placeholder='Venue'
          value={activity ? activity.venue : ''}
        />
        <Button floated='right' positive type='submit' content='Submit' />
        <Button onClick={() => setEditMode(false)} floated='right' type='button' content='Cancel' />
      </Form>
    </Segment>
  )
}

export default ActivityForm
