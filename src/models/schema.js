export const schema = {
	models: {
		Project: {
			name: 'Project',
			fields: {
				id: {
					name: 'id',
					isArray: false,
					type: 'ID',
					isRequired: true,
					attributes: []
				},
				index: {
					name: 'index',
					isArray: false,
					type: 'Int',
					isRequired: false,
					attributes: []
				},
				title: {
					name: 'title',
					isArray: false,
					type: 'String',
					isRequired: false,
					attributes: []
				},
				repo_url: {
					name: 'repo_url',
					isArray: false,
					type: 'AWSURL',
					isRequired: false,
					attributes: []
				},
				live_url: {
					name: 'live_url',
					isArray: false,
					type: 'AWSURL',
					isRequired: false,
					attributes: []
				},
				thumbnail: {
					name: 'thumbnail',
					isArray: false,
					type: 'AWSURL',
					isRequired: false,
					attributes: []
				},
				summary: {
					name: 'summary',
					isArray: false,
					type: 'AWSURL',
					isRequired: false,
					attributes: []
				},
				createdAt: {
					name: 'createdAt',
					isArray: false,
					type: 'AWSDateTime',
					isRequired: false,
					attributes: [],
					isReadOnly: true
				},
				updatedAt: {
					name: 'updatedAt',
					isArray: false,
					type: 'AWSDateTime',
					isRequired: false,
					attributes: [],
					isReadOnly: true
				}
			},
			syncable: true,
			pluralName: 'Projects',
			attributes: [
				{
					type: 'model',
					properties: {}
				},
				{
					type: 'auth',
					properties: {
						rules: [
							{
								allow: 'public',
								operations: ['create', 'update', 'delete', 'read']
							}
						]
					}
				}
			]
		}
	},
	enums: {},
	nonModels: {},
	codegenVersion: '3.4.4',
	version: '809933f4adc245e05669b3269743d244'
};
