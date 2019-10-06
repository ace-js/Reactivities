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
        setActivities(
          response.data.map(activity => ({
            ...activity,
            date: activity.date.split('.')[0]
          }))
        )
      })
  }, [])

  const onSelectActivityHandler = (id: string) => {
    const activity = activities.find(item => item.id === id)
    if (activity) {
      setSelectedActivity(activity)
      setEditMode(false)
    }
  }

  const onOpenCreateFormHandler = () => {
    setSelectedActivity(null)
    setEditMode(true)
  }

  const onCreateActivityHandler = (activity: IActivity) => {
    setActivities([...activities, activity])
    setEditMode(false)
    setSelectedActivity(activity)
  }

  const onEditActitityHandler = (activity: IActivity) => {
    const activityIndex = activities.findIndex(item => item.id === activity.id)
    if (activityIndex !== -1) {
      const activitiesCopy = [...activities]
      activitiesCopy[activityIndex] = activity
      setActivities(activitiesCopy)
      setSelectedActivity(activity)
      setEditMode(false)
    }
  }

  const onDeleteActivityHandler = (id: string) => {
    setActivities([...activities.filter(activity => activity.id !== id)])
    if (selectedActivity && selectedActivity.id === id) {
      setSelectedActivity(null)
      setEditMode(false)
    }
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
          createActivity={onCreateActivityHandler}
          editActivity={onEditActitityHandler}
          deleteActivity={onDeleteActivityHandler}
        />
      </Container>
    </>
  )
  //  }
}

export default App
