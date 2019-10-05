import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'semantic-ui-react'

import IActivity from '../models/activity'
import NavBar from '../../features/nav/NavBar'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([])
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(
    null
  )
  const [editMode, setEditMode] = useState(false)
  //didMount
  useEffect(() => {
    // <IActivity[]> specified the type that we expect as a response
    axios
      .get<IActivity[]>('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data)
      })
  }, [])

  const onSelectActivityHandler = (id: string) => {
    const activity = activities.find(item => item.id === id)
    if (activity) setSelectedActivity(activity)
  }

  const onOpenCreateFormHandler = () => {
    setSelectedActivity(null)
    setEditMode(true)
  }

  return (
    <>
      <NavBar openCreateForm={onOpenCreateFormHandler} />
      <Container style={{ marginTop: '7rem' }}>
        <ActivityDashboard
          activities={activities}
          selectActivity={onSelectActivityHandler}
          selectedActivity={selectedActivity!}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedActivity={setSelectedActivity}
        />
      </Container>
    </>
  )
  //  }
}

export default App
