import React from 'react';
import styled from 'styled-components';
import Slider from 'material-ui/Slider';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';

const locations = ['TP .Hồ Chí Minh','Nha Trang','Đà Nẵng','Quy Nhơn','Hải Phòng'];
const items=locations.map((location)=>{
    return(
        <MenuItem value={location}
         key={location} 
         primaryText={`${location}`} 
          />
    )
})
const dataSource = ['12345', '23456', '34567'];
export default class RoomFilter extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={price:100,location:0 ,distance:10,searchText:''};
        this.HandlePriceChange=this.HandlePriceChange.bind(this)
        this.HandleDistanceChange=this.HandleDistanceChange.bind(this)
        this.HandleLocationChange=this.HandleLocationChange.bind(this)
        this.handleNewRequest=this.handleNewRequest.bind(this)
        this.handleUpdateInput=this.handleUpdateInput.bind(this)
    }
    handleUpdateInput = (searchText) => {
        this.setState({
          searchText: searchText,
        });
      };
    
    handleNewRequest = () => {
        this.setState({
          searchText: '',
        });
      };
    HandlePriceChange(e,value){
        this.setState({price:value});
        console.log(this.state)
    }
    HandleLocationChange(e,index,value){
        this.setState({location:value})
        console.log(this.state)

    }
    HandleDistanceChange(e,value){
        this.setState({distance:value})
    }
    render(){
        return(
            <div>
                <FilterOpt>
                    <H>Price/Night</H>
                    <div>
                        <div style={{'color':'#00bcd4','textAlign':'center'}}>Max {this.state.price}$</div>
                        <div>
                            <span>100$</span>
                            <span style={{'float':'right'}}>500$</span>
                        </div>
                        <div>
                            <Slider
                            name='price'
                            min={100}
                            max={500}
                            step={10}
                            value={this.state.price}
                            onChange={this.HandlePriceChange}
                            />
                        </div>
                    </div>
                </FilterOpt>
                <FilterOpt>
                    <H>Hotel Class</H>
                    <div>
                        <span>
                            <Checkbox label='1 sao'/>
                        </span>
                        <span>
                            <Checkbox label='2 sao'/>
                        </span>
                        <span>
                            <Checkbox label='3 sao'/>
                        </span>
                        <span>
                            <Checkbox label='4 sao'/>
                        </span>
                        <span>
                            <Checkbox label='5 sao'/>
                        </span>
                    </div>
                </FilterOpt>
                <FilterOpt>
                    <H>Distance From</H>
                    <div>
                        <div>
                            <SelectField
                            floatingLabelText="Location"
                            value={this.state.location}
                            onChange={this.HandleLocationChange}
                            autoWidth={false}
                            style={{'width':'210px'}}
                            >
                            {items}
                            </SelectField>
                        </div>
                        <div>
                            <div style={{'color':'#00bcd4','textAlign':'center'}}>
                                Max {this.state.distance} km
                            </div>
                            <div>
                            <span>0.1 km</span>
                            <span style={{'float':'right'}}>20 km</span>
                        </div>
                            <Slider
                                name=''
                                min={0.1}
                                max={20}
                                step={0.1}
                                value={this.state.distance}
                                onChange={this.HandleDistanceChange}
                                />
                            <div>
                            <AutoComplete
                                hintText="Address"
                                filter={AutoComplete.noFilter}
                                dataSource={dataSource}
                                textFieldStyle={{'width':'200px'}}
                                />
                            </div>
                        </div>
                    </div>
                </FilterOpt>
                <FilterOpt>
                    <H>Name Search</H>
                    <div>
                    <AutoComplete
                        hintText="Hotel Name"
                        searchText={this.state.searchText}
                        dataSource={dataSource}
                        onUpdateInput={this.handleUpdateInput}
                        onNewRequest={this.handleNewRequest}
                        textFieldStyle={{'width':'200px'}}
                        filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
                        openOnFocus={true}
                    />
                    </div>
                </FilterOpt>
            </div>
        )
    }
}
const FilterOpt=styled.div`
padding: 15px;
background: #9e9e9e1a;
border-bottom: 1px dotted #0e0e0e;
`;
const H=styled.div`
font-weight: 800;
font-size: 20px;
margin-bottom: 20px;
`