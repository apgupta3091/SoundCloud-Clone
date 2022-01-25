# SoundWave

## BACKGROUND:

[Soundwave](https://soundwave-aa.herokuapp.com/#/)
is a clone of SoundCloud. A music streaming app which allows users to stream their favorite songs as well as upload their own music to the platform.

<img width="1437" alt="Screen Shot 2022-01-25 at 4 16 29 PM" src="https://user-images.githubusercontent.com/53449807/151061159-d5fadbe8-b584-4bb0-8225-48ec2e998b67.png">

-----------------------------------------------------------------------------

## TECHNOLOGIES, LIBRARIES, API'S:

- Ruby
- Rails
- React
- Redux
- Postgresql
- AWS / S3

-----------------------------------------------------------------------------
## FEATURES

### Splash/User Auth
<img width="452" alt="Screen Shot 2022-01-25 at 4 17 42 PM" src="https://user-images.githubusercontent.com/53449807/151061370-bf4f8b7b-1c25-4ffd-8ac5-f0f2be02f8b8.png">
```
const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Sign in',
});

const mDTP = (dispatch, ownProps) => ({
    processForm: formUser => dispatch(login(formUser)),
    loginGuest: guest => dispatch(login(guest)),
   
});
```
<img width="450" alt="Screen Shot 2022-01-25 at 4 17 51 PM" src="https://user-images.githubusercontent.com/53449807/151061376-d6fb1038-0695-4db4-8060-b4bd7949bb24.png">
```
const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Create account',
});

const mDTP = (dispatch, ownProps) => ({
    processForm: formUser => dispatch(signup(formUser)),
    loginGuest: guest => dispatch(login(guest)),
});
```

### Song CRUD
<img width="626" alt="Screen Shot 2022-01-25 at 4 18 42 PM" src="https://user-images.githubusercontent.com/53449807/151061630-4408d9ca-38d7-45ac-974e-90dc78ba55ce.png">

<img width="623" alt="Screen Shot 2022-01-25 at 4 19 02 PM" src="https://user-images.githubusercontent.com/53449807/151061644-bd57318d-4e68-4321-8630-7adcf52fbdbc.png">

<img width="1437" alt="Screen Shot 2022-01-25 at 4 19 22 PM" src="https://user-images.githubusercontent.com/53449807/151061651-abab67a2-f7bb-47ef-abd4-f2e87ee512c7.png">


### Continous Play Bar

<img width="719" alt="Screen Shot 2022-01-25 at 4 21 05 PM" src="https://user-images.githubusercontent.com/53449807/151061860-29c9913a-908c-4ef2-a0ea-f9903e5bce82.png">




-----------------------------------------------------------------------------

## FUTURE FEATURES:

- dropdown selection for the Avg salary which updates the map accordingly
- dropwdown selection for the # of jobs requiring JS which updates the map accordingly
