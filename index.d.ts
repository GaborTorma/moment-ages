import moment from 'moment';

declare module 'moment' {
    interface Moment {
				ageFrom(input: Date): Object;
        age(now: Data): Object;
        isAgeBetween(from: Number, to: Number, now: Date): Boolean;
    }
	}

export = moment;
