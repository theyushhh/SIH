import React, { useState } from 'react';
import ChatBot from './ChatBot.jsx';

const Sidebar = ({ filters, onFilterChange, kpi, selectedClaim, setSelectedClaim, schemes, onExportCSV }) => {
  const [activeTab, setActiveTab] = useState('filters');

  return (
    <div className="w-80 bg-gray-800 p-4 flex flex-col h-full overflow-y-auto">
      <h2 className="text-xl font-bold mb-6 text-white">FRA Atlas DSS</h2>

      {/* Tabs */}
      <div className="flex mb-4 border-b border-gray-600">
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'filters' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
          onClick={() => setActiveTab('filters')}
        >
          Filters
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'chat' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
          onClick={() => setActiveTab('chat')}
        >
          Legal AI
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'schemes' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
          onClick={() => setActiveTab('schemes')}
        >
          Schemes
        </button>
      </div>

      {/* KPI Tiles */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-gray-700 p-3 rounded-lg">
          <div className="text-2xl font-bold text-white">{kpi.total}</div>
          <div className="text-sm text-gray-300">Total Claims</div>
        </div>
        <div className="bg-green-700 p-3 rounded-lg">
          <div className="text-2xl font-bold text-white">{kpi.approved}</div>
          <div className="text-sm text-green-100">Approved</div>
        </div>
        <div className="bg-yellow-700 p-3 rounded-lg">
          <div className="text-2xl font-bold text-white">{kpi.pending}</div>
          <div className="text-sm text-yellow-100">Pending</div>
        </div>
        <div className="bg-red-700 p-3 rounded-lg">
          <div className="text-2xl font-bold text-white">{kpi.rejected}</div>
          <div className="text-sm text-red-100">Rejected</div>
        </div>
      </div>

      {/* Export Button */}
      <button
        onClick={onExportCSV}
        className="mb-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
      >
        Export CSV
      </button>

      {/* Tab Content */}
      {activeTab === 'filters' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">State</label>
            <select
              value={filters.state}
              onChange={(e) => onFilterChange('state', e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
            >
              <option value="">All States</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Odisha">Odisha</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Claim Type</label>
            <select
              value={filters.type}
              onChange={(e) => onFilterChange('type', e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
            >
              <option value="">All Types</option>
              <option value="individual">Individual</option>
              <option value="community">Community</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
            <select
              value={filters.status}
              onChange={(e) => onFilterChange('status', e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
            >
              <option value="">All Status</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      )}

      {activeTab === 'chat' && (
        <ChatBot selectedClaim={selectedClaim} />
      )}

      {activeTab === 'schemes' && (
        <div>
          {selectedClaim ? (
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">
                Recommended Schemes for {selectedClaim.families?.name}
              </h3>
              {schemes.length > 0 ? (
                <ul className="space-y-3">
                  {schemes.map((scheme, i) => (
                    <li key={i} className="bg-gray-700 p-3 rounded">
                      <h4 className="font-medium text-white">{scheme.name}</h4>
                      <p className="text-sm text-gray-300 mt-1">{scheme.description}</p>
                      <p className="text-sm text-blue-300 mt-2">{scheme.benefits}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">No matching schemes found.</p>
              )}
            </div>
          ) : (
            <p className="text-gray-400">Select a claim on the map to see recommended schemes.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
