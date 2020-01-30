import React, {Component} from 'react';

class TodoInput extends Component {
  render() {

    const {
      item,
      editItem, 
      handleChange,
      handleSubmit
    } = this.props;

    return(
      <div>
        <h3 className="text-capitalize text-center">
            todo input
        </h3>
        <div className="card card-body my-3">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text bg-primary text-white">
                  {/* from font awesome =>  fas fa-clipboard-list*/}
                  <i className="fas fa-clipboard-list" />
                </div>
              </div>
              <input 
                type="text" 
                className="form-control text-capitalize"
                placeholder="add items"
                value={item}
                onChange={handleChange}
              />
            </div>
            <button 
              type="submit"
              className={
                editItem ? "btn btn-block btn-success mt-3"
                : "btn btn-block btn-primary mt-3"
              } 
            >
              {editItem ? "edit item" : "add"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoInput;