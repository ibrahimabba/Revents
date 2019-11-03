import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import { Form, Label, Segment, List } from 'semantic-ui-react'



const PlaceInput = ({input: {value, onChange, onblur}, onSelect, width, options, placeholder, meta: { touched, error}}) => {
    return (
        <PlacesAutocomplete value={value} onChange={onChange} searchOptions={options} onSelect={onSelect}>
            {({getInputProps, suggestions, getSuggestionItemProps, loading})=>(
                <Form.Field error={touched && !!error}>
                    <input placeholder={placeholder} {...getInputProps({placeholder, onblur})} />
                        {touched && error && <Label basic color='red'>{error}</Label>}
                        {suggestions.length > 0 && (
                            <Segment style={{marginTop: 0, position: 'absolute', zIndex: 1000 , width: '100%'}}>
                                {loading && <div>Loading...</div>}
                                <List selection>
                                    {suggestions.map(suggestion => (
                                        <List.Item {...getSuggestionItemProps(suggestion)}>
                                            <List.Header>
                                                {suggestion.formattedSuggestion.mainText}
                                            </List.Header>
                                            <List.Header>
                                                {suggestion.formattedSuggestion.secondaryText}
                                            </List.Header>

                                        </List.Item>
                                    ))}
                                </List>
                            </Segment>
                        )}
                </Form.Field>
            )}
        </PlacesAutocomplete>
    )
}

export default PlaceInput
