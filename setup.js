export default function setup(moment) {
	moment.fn.age = function (now = new Date()) {
		const output = {}
		now = moment(now)[this._isUTC ? 'utc' : 'local']()
		const years = now.diff(this, 'years', true)
		output.years = parseInt(years, 10)
		const months = (years - output.years) * 12
		output.months = parseInt(months, 10)
		output.days = parseInt((months - output.months) * now.daysInMonth(), 10)
		return output
	}

	moment.fn.ageFrom = function (input) {
		const output = {}
		const localInput = moment(input)[this._isUTC ? 'utc' : 'local']()
		const years = this.diff(localInput, 'years', true)
		output.years = parseInt(years, 10)
		const months = (years - output.years) * 12
		output.months = parseInt(months, 10)
		output.days = parseInt((months - output.months) * this.daysInMonth(), 10)
		return output
	}

	moment.fn.isAgeBetween = function (from, to, now = new Date()) {
		from = parseInt(from)
		to = parseInt(to)
		const age = this.age(now)
		return age.years >= from && age.years <= to
	}
}
