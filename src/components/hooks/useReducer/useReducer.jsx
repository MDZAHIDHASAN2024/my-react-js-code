import React, { useReducer, useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';

const contractList = [
  { id: '101', name: 'jahid', mobile: '0174940065' },
  { id: '102', name: 'jakir', mobile: '0174940065' },
  { id: '103', name: 'shakil', mobile: '0174940065' },
];

const UseReducer = () => {
  const [newContractName, setNewContractName] = useState('');
  const [newContractMobile, setNewContractMobile] = useState('');
  const reducer = (state, action) => {
    if (action.type === 'ADD') {
      const allContract = [...state.contracts, action.payload];
      return {
        ...state,
        contracts: allContract,
        isModalOpen: true,
        modal: 'Contract is added',
      };
    }
    if (action.type === 'DELETE') {
      const filtered = [...state.contracts].filter(
        (contract) => contract.id !== action.payload
      );
      return {
        ...state,
        contracts: filtered,
        isModalOpen: true,
        modal: 'Contract Deleted',
      };
    }

    return state;
  };

  const initialContract = {
    contracts: contractList,
    isModalOpen: false,
    modal: '',
  };
  const [contractState, dispatch] = useReducer(reducer, initialContract);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContract = {
      id: new Date().getTime().toString(),
      name: newContractName,
      mobile: newContractMobile,
    };
    dispatch({ type: 'ADD', payload: newContract });
  };

  const Modal = ({ modal }) => {
    return <p>{modal}</p>;
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              id="name"
              value={newContractName}
              onChange={(e) => setNewContractName(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="mobile">
            Mobile:
            <input
              type="number"
              name="mobile"
              id="mobile"
              value={newContractMobile}
              onChange={(e) => setNewContractMobile(e.target.value)}
            />
          </label>
        </div>
        {contractState.contracts && <Modal modal={contractState.modal} />}
        <button type="submit">Add Contract</button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {contractState.contracts &&
            contractState.contracts.map((contract) => {
              return (
                <tr key={contract.id}>
                  <td>{contract.name}</td>
                  <td>{contract.mobile}</td>
                  <td>
                    <button onClick={() => handleDelete(contract.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UseReducer;
